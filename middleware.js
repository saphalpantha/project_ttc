//     import { NextResponse } from 'next/server'
 

// export const getValidSubdomain = (host) => {
//   let subdomain = null;
//   if (!host && typeof window !== 'undefined') {
//     // On client side, get the host from window
//     host = window.location.host;
//   }
//   if (host && host.includes('.')) {
//     const candidate = host.split('.')[0];
//     if (candidate && !candidate.includes('localhost')) {
//       // Valid candidate
//       subdomain = candidate;
//     }
//   }
//   return subdomain;
// };


// // This function can be marked `async` if using `await` inside
// export function middleware(req) {
    
//     const PUBLIC_FILE = /\.(.*)$/; // Files
//      const url = req.nextUrl.clone();
//     console.log('middleware works');

//     if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

//     const host = req.headers.get('host');
//     const subdomain = getValidSubdomain(host);
//     if (subdomain) {
//     // Subdomain available, rewriting
//     console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
//     url.pathname = `/${subdomain}${url.pathname}`;
//     return NextResponse.rewrite(url);
//   }
  
    
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/:path*',
// }
















// import { NextResponse } from 'next/server'

// export const getValidSubdomain = (host) => {
//   let subdomain = null;
//   if (!host && typeof window !== 'undefined') {
//     // On client side, get the host from window
//     host = window.location.host;
//   }
//   if (host && host.includes('.')) {
//     const candidate = host.split('.')[0];
//     if (candidate && !candidate.includes('localhost')) {
//       // Valid candidate
//       subdomain = candidate;
//     }
//   }
//   return subdomain;
// };

// export function middleware(req) {
//   const PUBLIC_FILE = /\.(.*)$/; // Files
//   const url = req.nextUrl.clone();
//   console.log('middleware works');

//   if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

//   const host = req.headers.get('host');
//   const subdomain = getValidSubdomain(host);

//   if (subdomain) {
//     // Subdomain routing logic for specific subdomains and paths
//     if (['bba', 'mba'].includes(subdomain)) {
//       if (subdomain === 'mba' && url.pathname === '/pay') {
//         // Handle the specific /pay path for mba.localhost:3000
//         console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}/pay`);
//         url.pathname = `/${subdomain}/pay`;
//       } else {
//         // General subdomain path handling
//         console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
//         url.pathname = `/${subdomain}${url.pathname}`;
//       }
//       return NextResponse.rewrite(url);
//     }
//   }
// }

// export const config = {
//   matcher: [
//     '/pay',         // Handles specific route like /pay
//     '/:path*'       // Handles all other paths
//   ],
// };




// import { NextResponse } from 'next/server';

// export const getValidSubdomain = (host) => {
//   let subdomain = null;
//   if (!host && typeof window !== 'undefined') {
//     // On client side, get the host from window
//     host = window.location.host;
//   }
//   if (host && host.includes('.')) {
//     const candidate = host.split('.')[0];
//     if (candidate && !candidate.includes('localhost')) {
//       // Valid candidate
//       subdomain = candidate;
//     }
//   }
//   return subdomain;
// };

// export function middleware(req) {
//   const PUBLIC_FILE = /\.(.*)$/; // Files
//   const url = req.nextUrl.clone();
//   console.log('middleware works');

//   if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

//   const host = req.headers.get('host');
//   const subdomain = getValidSubdomain(host);

//   // List of valid stream types
//   const validStreamTypes = ['bba', 'mba', 'science'];

//   if (subdomain && validStreamTypes.includes(subdomain)) {
//     // Rewriting to the courses path with streamType based on the subdomain
//     console.log(`>>> Rewriting: ${url.pathname} to /courses/${subdomain}${url.pathname}`);
//     url.pathname = `/courses/${subdomain}${url.pathname}`;
//     return NextResponse.rewrite(url);
//   }
// }

// export const config = {
//   matcher: '/:path*', // Matches all paths
// };








// import { NextResponse } from 'next/server';

// export const getValidSubdomain = (host) => {
//   let subdomain = null;
//   if (!host && typeof window !== 'undefined') {
//     // On client side, get the host from window
//     host = window.location.host;
//   }
//   if (host && host.includes('.')) {
//     const candidate = host.split('.')[0];
//     if (candidate && !candidate.includes('localhost')) {
//       // Valid candidate
//       subdomain = candidate;
//     }
//   }
//   return subdomain;
// };

// export function middleware(req) {
//   const url = req.nextUrl.clone();
//   const host = req.headers.get('host');
//   const subdomain = getValidSubdomain(host);

//   // If the path is /pay and no subdomain is present
//   if (url.pathname === '/pay' && !subdomain) {
//     // Rewrite to /courses/mba/pay assuming 'mba' as default subdomain
//     url.pathname = `/courses/mba/pay`;
//     return NextResponse.rewrite(url);
//   }

//   // If a valid subdomain is present
//   if (subdomain && ['bba', 'mba', 'science'].includes(subdomain)) {
//     url.pathname = `/courses/${subdomain}${url.pathname}`;
//     return NextResponse.rewrite(url);
//   }
// }

// export const config = {
//   matcher: '/:path*', // Match all paths
// };










// import { NextResponse } from 'next/server';

// export const getValidSubdomain = (host) => {
//   let subdomain = null;
//   if (!host && typeof window !== 'undefined') {
//     // On client side, get the host from window
//     host = window.location.host;
//   }
//   if (host && host.includes('.')) {
//     const candidate = host.split('.')[0];
//     if (candidate && !candidate.includes('localhost')) {
//       // Valid candidate
//       subdomain = candidate;
//     }
//   }
//   return subdomain;
// };

// export function middleware(req) {
//   const url = req.nextUrl.clone();
//   const host = req.headers.get('host');
//   const subdomain = getValidSubdomain(host);

//   // Check if subdomain is bba or mba
//   if (subdomain === 'bba' || subdomain === 'mba') {
//     // Handle /admission routing
//     if (url.pathname === '/admission') {
//       url.pathname = '/admissions';
//       return NextResponse.rewrite(url);
//     }
    
//     // Handle /pay routing only for mba
//     if (subdomain === 'mba' && url.pathname === '/pay') {
//       return NextResponse.rewrite(url);
//     }
    
//     // Handle /courses/[streamType] routing
//     if (url.pathname.startsWith('/courses')) {
//       url.pathname = `/courses/${subdomain}${url.pathname.replace('/courses', '')}`;
//       return NextResponse.rewrite(url);
//     }
//   }
  
//   // If the subdomain is science or other cases, do nothing
// }

// export const config = {
//   matcher: '/:path*', // Matches all paths
// };







// ======================================================================================================



import { NextResponse } from 'next/server';

export const getValidSubdomain = (host) => {
  let subdomain = null;

  // Use the provided host or get it from the window object if in a browser environment
  if (!host && typeof window !== 'undefined') {
    host = window.location.host;
  }

  if (host && host.includes('.')) {
    const hostParts = host.split('.');
    // For localhost or Vercel environments, ignore the first part if it's 'localhost' or 'vercel'
    if (hostParts.length > 2 && !host.includes('localhost')) {
      subdomain = hostParts[0]; // Extract subdomain
    }
  }

  return subdomain;
};
export function middleware(req) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');
  const subdomain = getValidSubdomain(host);

  // Block all routes if subdomain is invalid
  if (subdomain && !['bba', 'mba'].includes(subdomain)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Handle /admission routing
  if (url.pathname === '/admission') {
    if (subdomain === 'bba' || subdomain === 'mba') {
      // Allow bba and mba subdomains to access their respective /admission pages
      return NextResponse.next();
    } else if (!subdomain) {
      // Allow main domain for science and management
      return NextResponse.next();
    } else {
      // Block other subdomains
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Handle /courses routing
  if (url.pathname.startsWith('/courses')) {
    // Handle subdomains 'bba' and 'mba'
    if (subdomain === 'bba' || subdomain === 'mba') {
      // Construct the new URL
      const urll = `/courses/${subdomain}${url.pathname.replace('/courses', '')}`;
      
      // Rewrite the URL to the new path
      url.pathname = urll;
      return NextResponse.rewrite(url);
    } else if (!subdomain) {
      // Allow routes for the main domain (science and management)
      return NextResponse.next();
    } else {
      // Redirect invalid subdomains to the home page
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  // Handle /pay routing
  if (url.pathname === '/pay') {
    if (subdomain === 'mba') {
      return NextResponse.next();
    } else {
      // Block other subdomains and main domain
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Allow all other routes as they are
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};







// ==========================================================================================

