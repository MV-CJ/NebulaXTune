// front-end/src/utils/api.js
export async function fetchHomeContent() {
    const response = await fetch('http://127.0.0.1:5000/');
    if (!response.ok) {
      throw new Error('Erro ao buscar conteúdo da home');
    }
    return await response.text();
  }
  