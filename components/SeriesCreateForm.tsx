"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { seriesService } from "@/services/api";
import { CreateSeries } from "@/types/series";

export function SeriesCreateForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const seriesData: CreateSeries = {
      name: name.trim(),
      description: description.trim() !== "" ? description.trim() : null,
    };

    try {
      const createdSeries = await seriesService.createSeries(seriesData);
      console.log("Created:", createdSeries);

      form.reset();
      alert("Series created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create series.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded-xl bg-card">
      <h2 className="text-xl font-bold">Create New Series</h2>

      <div>
        <label className="text-sm font-medium block mb-1">
          Series Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          type="text"
          required 
          placeholder="e.g. ICT Silver Bullet Season 1"
          className="w-full p-2 border rounded bg-background"
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1">
          Description <span className="text-xs text-muted-foreground">(Optional)</span>
        </label>
        <textarea
          name="description"
          rows={3}
          placeholder="Optional notes about this strategy or series..."
          className="w-full p-2 border rounded bg-background resize-none"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Creating..." : "Create Series"}
      </Button>
    </form>
  );
}