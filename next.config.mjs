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
            destination: 'http://109.176.198.177:8001/admin',
            permanent: true,
          }
        ]
      },
};


export default nextConfig;