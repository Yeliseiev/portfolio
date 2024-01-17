export function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const URL = 'https://yeliseiev.github.io/portfolio/api/projects.json';

export const fetchProjects = async () => {
  const response = await fetch(URL);
  return response.json();
};
