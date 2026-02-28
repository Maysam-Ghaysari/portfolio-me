async function getProjects() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("maysam-portfolio");
    const projects = await db
      .collection("projects")
      .find({})
      .project({ slug: 1, updatedAt: 1 })
      .toArray();

    await client.close();
    return projects;
  } catch (error) {
    console.error("Error fetching projects for sitemap:", error);
    return []; // اگر خطا داد، آرایه خالی برگردان → sitemap خراب نشود
  }
}

export default async function sitemap() {
  const baseUrl = "https://maysamghaysari.ir";
  const today = new Date().toISOString().split("T")[0];

  const projects = await getProjects();

  return [
    // صفحه اصلی + عکس
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        {
          loc: `${baseUrl}/maysam-ghaysari1.webp`,
          caption:
            "میثم قیصری| maysam ghaysari  - توسعه‌دهنده فرانت‌اند Next.js و React",
          title: "میثم قیصری | maysam ghaysari",
        },
        // اگر عکس مهم دیگری در صفحه اصلی هست اضافه کنید
      ],
    },

    // صفحات پروژه‌ها
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt.toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}

export const revalidate = 86400;
