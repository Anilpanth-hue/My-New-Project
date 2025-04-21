// Simple API simulation functions with delays

/**
 * Simulates an API fetch with a delay
 */
export async function fetchAPI(endpoint: string, options?: RequestInit): Promise<any> {
    // Simulate network delay
    const delay = Math.floor(Math.random() * 1000) + 500
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve({ success: true, message: "Operation successful" }),
        })
      }, delay)
    })
  }
  
  /**
   * Simulates fetching user profile data
   */
  export async function fetchUserProfile(userId: string): Promise<any> {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
  
    // Return mock user data
    return {
      id: userId || "default",
      name: "Anil Panth",
      username: "anilcode",
      email: "anil@example.com",
      platforms: [
        { id: "leetcode", name: "LeetCode", connected: true, username: "anilcode" },
        { id: "gfg", name: "GeeksforGeeks", connected: true, username: "anilcode" },
        { id: "codeforces", name: "CodeForces", connected: true, username: "anilcode" },
        { id: "hackerrank", name: "HackerRank", connected: false, username: "" },
      ],
    }
  }
  
  /**
   * Simulates generating a CodeTrek card
   */
  export async function generateCodeTrekCard(userId: string): Promise<any> {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
  
    // Return mock card data
    return {
      id: "card_" + Math.random().toString(36).substring(2, 10),
      userId: userId || "default",
      createdAt: new Date().toISOString(),
      url: "/trek-card?id=" + (userId || "default"),
    }
  }
  