import { markdownToHtml } from "./markdownToHtml";

export const renderMarkdown = async (
  markdownContent: string
): Promise<string> => {
  return await markdownToHtml(markdownContent || "");
};
