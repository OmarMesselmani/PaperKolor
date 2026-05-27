import express from "express";
import cors from "cors";
import "dotenv/config";
import { prisma } from "./db.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy" });
});

// Categories Endpoints
app.get("/api/categories", async (req, res) => {
  try {
    const parentSlug = req.query.parentSlug as string | undefined;
    
    let categories;
    if (parentSlug) {
      categories = await prisma.category.findMany({
        where: { parentSlug },
        orderBy: { sortOrder: "asc" }
      });
    } else {
      categories = await prisma.category.findMany({
        orderBy: { sortOrder: "asc" }
      });
    }
    
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

app.get("/api/categories/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await prisma.category.findUnique({
      where: { slug },
      include: {
        children: true
      }
    });
    
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    
    res.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ error: "Failed to fetch category" });
  }
});

// Coloring Pages Endpoints
app.get("/api/pages", async (req, res) => {
  try {
    const categorySlug = req.query.categorySlug as string | undefined;
    const difficulty = req.query.difficulty as string | undefined;
    const ageGroup = req.query.ageGroup as string | undefined;
    
    const where: any = { published: true };
    
    if (categorySlug) {
      where.OR = [
        { categorySlug },
        { subCategorySlug: categorySlug }
      ];
    }
    if (difficulty) {
      where.difficulty = difficulty;
    }
    if (ageGroup) {
      where.ageGroup = ageGroup;
    }
    
    const pages = await prisma.coloringPage.findMany({
      where,
      orderBy: { createdAt: "desc" }
    });
    
    res.json(pages);
  } catch (error) {
    console.error("Error fetching coloring pages:", error);
    res.status(500).json({ error: "Failed to fetch coloring pages" });
  }
});

app.get("/api/pages/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const page = await prisma.coloringPage.findUnique({
      where: { slug }
    });
    
    if (!page) {
      return res.status(404).json({ error: "Coloring page not found" });
    }
    
    // Increment view counter asynchronously
    prisma.coloringPage.update({
      where: { slug },
      data: { views: { increment: 1 } }
    }).catch(err => console.error("Error incrementing views:", err));
    
    res.json(page);
  } catch (error) {
    console.error("Error fetching coloring page:", error);
    res.status(500).json({ error: "Failed to fetch coloring page" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Backend API server is running on http://localhost:${port}`);
});
