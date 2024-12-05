const nextConfig = {
  
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/Home',
            permanent: true,
          }
        ]
      },
};


export default nextConfig;