const nextConfig = {
  
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/Home',
            permanent: true,
          },
          {
            source: '/admin',
            destination: 'http://localhost:8001/admin',
            permanent: true,
          }
        ]
      },
};


export default nextConfig;