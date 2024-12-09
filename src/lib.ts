import { create } from "apisauce";
const devopsToken = "ubvcB1wcmI4RQ3pTLkpI-5h5i8QZWZe3j4obIfP_";

export const sdk = create({
  baseURL: "https://app.nocodb.com/api/v2/tables",
  headers: {
    "xc-token": devopsToken,
  },
});

export const metaUrl = {
  user_profile: "/mhrxer6akqkzqkd/records",
  featured_projects: "/myi9llxkz0pwdop/records",
  project_gallery: "/m5162mz7j68uo6x/records",
  skills_assignment: "/memmamjp27luphf/records",
  assignment_portfolio: "/m5eaaoaqggffelw/records",
  user_skills: "/mjspxaotdin1gkr/records",
  education_list: "/mp8ji7ejdid3ek4/records",
  certification_list: "/mf4bq3wgit8jhd9/records",
  contactInfo: "/mj5dheyra0siqah/records",
};

export const formatTags = (input: string): string[] => {
  // Check for empty or null input
  if (!input) {
    return [];
  }

  // Split the string by commas, trim spaces, and filter out empty strings
  return input
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");
};

export const getImage = (img: any): string => {
  if (img) {
    return img[0].signedUrl;
  }
  return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
};
