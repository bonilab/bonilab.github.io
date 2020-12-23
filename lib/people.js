import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const peopleDirectory = path.join(process.cwd(), "data", "people");

export async function getSortedPeopleData() {
  // Get file names under /people
  const fileNames = fs.readdirSync(peopleDirectory);
  const allPeopleData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(peopleDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

      const contentHtml = processedContent.toString();
      // console.log(matterResult);
      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
        content: contentHtml,
      };
    })
  );
  // Sort people by order
  return allPeopleData.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  });
}
