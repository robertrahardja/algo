import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "fs";
import * as path from "path";

// Helper function to create directory if it doesn't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

// Helper function to delay between requests
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper function to clean and format the markdown content
function formatMarkdown($, markdownBody) {
  return markdownBody
    .clone()
    .find("div")
    .remove()
    .end()
    .text()
    .trim()
    .replace(/\n{3,}/g, "\n\n");
}

// Helper function to format folder name
function formatFolderName(title) {
  // First, extract the number and name parts
  const match = title.match(/^(\d+)\.\s*(.+)$/);
  if (!match) return title;

  const [, number, name] = match;

  // Replace spaces and special characters with underscores
  const formattedName = name
    .trim()
    .replace(/[<>:"/\\|?*]/g, "") // Remove invalid filesystem characters
    .replace(/\s+/g, "_"); // Replace spaces with underscores

  // Combine with number using underscore
  return `${number}_${formattedName}`;
}

async function scrapeLeetCodeProblem(problemNumber) {
  const url = `https://leetcode.ca/all/${problemNumber}.html`;

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const $ = cheerio.load(response.data);

    // Extract the title
    const title = $("div.div-width h1").text().trim();

    // Skip if no title found (indicates invalid problem page)
    if (!title) {
      console.log(`Skipping ${problemNumber} - No content found`);
      return false;
    }

    // Create folder name using formatted title
    const folderName = formatFolderName(title);

    // Create folder for the problem
    ensureDirectoryExists(folderName);

    // Extract the problem description and example
    const markdownBody = $(".markdown-body.div-width");
    const content = formatMarkdown($, markdownBody);

    // Create markdown content
    const markdownContent = `# ${title}\n\n${content}`;

    // Create filename
    const filename = path.join(folderName, "question.md");

    // Save to markdown file
    fs.writeFileSync(filename, markdownContent, "utf8");
    console.log(`Successfully created ${filename}`);
    return true;
  } catch (error) {
    console.error(`Error processing problem ${problemNumber}:`, error.message);
    return false;
  }
}

async function scrapeAllProblems() {
  const startNumber = 1;
  const endNumber = 1857;
  let successCount = 0;
  let failureCount = 0;

  for (let i = startNumber; i <= endNumber; i++) {
    console.log(`Processing problem ${i}...`);

    const success = await scrapeLeetCodeProblem(i);
    if (success) {
      successCount++;
    } else {
      failureCount++;
    }

    // Add delay between requests to avoid overwhelming the server
    await delay(1000); // 1 second delay between requests

    // Log progress every 50 problems
    if (i % 50 === 0) {
      console.log(`Progress: ${i}/${endNumber} problems processed`);
      console.log(`Success: ${successCount}, Failed: ${failureCount}`);
    }
  }

  console.log("\nScraping completed!");
  console.log(`Total problems processed: ${endNumber - startNumber + 1}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${failureCount}`);
}

// Run the scraper
scrapeAllProblems().catch(console.error);
