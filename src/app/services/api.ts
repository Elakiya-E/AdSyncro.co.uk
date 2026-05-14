import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const aboutService = {
    get: () => api.get('/about'),
    update: (data: any) => api.put('/about', data),
};

export const blogService = {
    getAll: () => api.get('/blogs'),
    getBySlug: (slug: string) => api.get(`/blogs/${slug}`),
    create: (data: any) => api.post('/blogs', data),
    update: (id: string, data: any) => api.put(`/blogs/${id}`, data),
};

export const caseStudyService = {
    getAll: () => api.get('/case-studies'),
    getBySlug: (slug: string) => api.get(`/case-studies/${slug}`),
    create: (data: any) => api.post('/case-studies', data),
    update: (id: string, data: any) => api.put(`/case-studies/${id}`, data),
};

export const pricingService = {
    get: () => api.get('/pricing'),
    update: (data: any) => api.put('/pricing', data),
};

export const serviceService = {
    getAll: () => api.get('/services'),
    create: (data: any) => api.post('/services', data),
    update: (id: string, data: any) => api.put(`/services/${id}`, data),
};

export const solutionService = {
    getAll: () => api.get('/solutions'),
    create: (data: any) => api.post('/solutions', data),
    update: (id: string, data: any) => api.put(`/solutions/${id}`, data),
};

export default api;
