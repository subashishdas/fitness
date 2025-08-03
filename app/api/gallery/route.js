import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "gym";
  const page = searchParams.get("page") || 1;
  const url = `https://api.pexels.com/v1/search`;

  try {
    const response = await axios.get("https://api.pexels.com/v1/search", {
      headers: { Authorization: process.env.PEXELS_API_KEY },
      params: {
        query: query,
        per_page: 20,
        page,
      },
    });

    if (!response.data || !response.data.photos) {
      return NextResponse.json({ message: "No images found" }, { status: 404 });
    }

    // Extract only the image URLs you need
    const images = response.data.photos.map((photo) => photo.src.large);
    return NextResponse.json(images, { status: 200 });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
