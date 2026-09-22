"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categoryService } from "@/services/api";
import { CategoryCreate } from "@/types/category";

export function CategoryCreateForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const category_type = formData.get("category_type") as string;

    const categoryData: CategoryCreate = {
      name: name.trim(),
      category_type: category_type.trim(),
    };

    try {
      const createdSeries = await categoryService.createCategory(categoryData);
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
      <h2 className="text-xl font-bold">Create New Category</h2>

      <div>
        <label className="text-sm font-medium block mb-1">
          Category Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          type="text"
          required 
          placeholder="5min IFVG"
          className="w-full p-2 border rounded bg-background"
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1">
          category_type <span className="text-xs text-muted-foreground">(Optional)</span>
        </label>
        <textarea
          name="category_type"
          rows={3}
          placeholder="Category type: Fair Value Gap Inversion ..."
          className="w-full p-2 border rounded bg-background resize-none"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Creating..." : "Create Series"}
      </Button>
    </form>
  );
}