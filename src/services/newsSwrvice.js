const API_KEY = "70b170a79e044f62a1a35d4177616192"; // ganti dengan API KEY kamu
// BASE_URL tidak di pakai karena kita fatch lewat backend proxy

export async function fetchNews(category = "") {
    try {
        const url = category
    ? `/api/news/${category}`
    : `/api/news`;

    const response = await fetch(url);
    const data = await response.json();
    return data.articles || [];
}   catch (error) {
    console.error("Gagal fetch berita:", error);
    return [];
  }
}
export default {
    serves: {
        Proxy: {
            "/api": "https://localhost:5000"
        }
    }
}