module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["will-morris-demo-s3.s3.ap-southeast-2.amazonaws.com"],
  },
  fonts: {
    domains: ["fonts.gstatic.com"],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};
