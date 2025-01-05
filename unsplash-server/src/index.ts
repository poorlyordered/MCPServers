#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

/**
 * Type alias for a note object.
 */
type Note = { title: string, content: string };

/**
 * Simple in-memory storage for notes.
 * In a real implementation, this would likely be backed by a database.
 */
const notes: { [id: string]: Note } = {
  "1": { title: "First Note", content: "This is note 1" },
  "2": { title: "Second Note", content: "This is note 2" }
};

/**
 * Create an MCP server with capabilities for resources (to list/read notes),
 * tools (to create new notes), and prompts (to summarize notes).
 */
const server = new Server(
  {
    name: "unsplash-server",
    version: "0.1.0",
  },
  {
    capabilities: {
      resources: {},
      tools: {},
      prompts: {},
    },
  }
);

/**
 * Handler for listing available notes as resources.
 * Each note is exposed as a resource with:
 * - A note:// URI scheme
 * - Plain text MIME type
 * - Human readable name and description (now including the note title)
 */
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: Object.entries(notes).map(([id, note]) => ({
      uri: `note:///${id}`,
      mimeType: "text/plain",
      name: note.title,
      description: `A text note: ${note.title}`
    }))
  };
});

/**
 * Handler for reading the contents of a specific note.
 * Takes a note:// URI and returns the note content as plain text.
 */
server.setRequestHandler(ReadResourceRequestSchema, async (request: { params: { uri: string } }) => {
  const url = new URL(request.params.uri);
  const id = url.pathname.replace(/^\//, '');
  const note = notes[id];

  if (!note) {
    throw new Error(`Note ${id} not found`);
  }

  return {
    contents: [{
      uri: request.params.uri,
      mimeType: "text/plain",
      text: note.content
    }]
  };
});

/**
 * Handler that lists available tools.
 * Exposes a single "create_note" tool that lets clients create new notes.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "create_note",
        description: "Create a new note",
        inputSchema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Title of the note"
            },
            content: {
              type: "string",
              description: "Text content of the note"
            }
          },
          required: ["title", "content"]
        }
      },
      {
        name: "fetch_image",
        description: "Fetch images from Unsplash",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search query for images"
            },
            count: {
              type: "number",
              description: "Number of images to fetch",
              minimum: 1,
              maximum: 10
            }
          },
          required: ["query", "count"]
        }
      }
    ]
  };
});

/**
 * Handler for the create_note tool.
 * Creates a new note with the provided title and content, and returns success message.
 */
server.setRequestHandler(CallToolRequestSchema, async (request: { params: { name: string; arguments?: { title?: string; content?: string; query?: string; count?: number } } }) => {
  switch (request.params.name) {
    case "create_note": {
      const title = String(request.params.arguments?.title);
      const content = String(request.params.arguments?.content);
      if (!title || !content) {
        throw new Error("Title and content are required");
      }

      const id = String(Object.keys(notes).length + 1);
      notes[id] = { title, content };

      return {
        content: [{
          type: "text",
          text: `Created note ${id}: ${title}`
        }]
      };
    }

    default: {
      throw new Error("Unknown tool");
    }
    case "fetch_image": {
      const query = String(request.params.arguments?.query);
      const count = Number(request.params.arguments?.count);
      if (!query || !count) {
        throw new Error("Query and count are required");
      }

      const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}`, {
        headers: {
          Authorization: `Client-ID 686281`
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch images from Unsplash");
      }

      const data = await response.json();
      const images = data.results.map((image: { id: string; urls: { small: string }; alt_description: string | null; }) => ({
        id: image.id,
        url: image.urls.small,
        description: image.alt_description || "No description"
      }));

      return {
        content: [{
          type: "text",
          text: JSON.stringify(images, null, 2)
        }]
      };
    }
  }
});
