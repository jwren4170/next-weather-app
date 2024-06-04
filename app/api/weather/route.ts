export const GET = async (city: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=${apiKey}`;

    if (!apiKey) {
      throw new Error("No API key");
    }

    const response = await fetch(url, { next: { revalidate: 300 } });
    const results = await response.json();
    console.log(results);

    return Response.json({ results });
  } catch (error: any) {
    return error;
  }
};
