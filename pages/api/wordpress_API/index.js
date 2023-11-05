// Wordpress Rest API Start
import axios from "axios";

// Fetch what makes us different datas
export const fetchWhatMakesUsDifferentDatas = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/information?slug=what-makes-us-different&_fields=title,x_metadata`
  );
};

// Fetch Team Members Data
export const teamMembersData = () => {
  return axios.get(
    // `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/team?orderby=date&order=asc&_fields=id,title,slug,x_featured_media_original,x_metadata.wpcf_designation`

    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/team?_fields=id,title,slug,x_featured_media_original,x_metadata.wpcf_designation`
  );
};

// Fetch Testimonials Data
export const fetchTestimonialsData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/testimonials?&per_page=5&_fields=id,slug,title,content,x_featured_media_original`
  );
};

// Fetch Trips data
export const fetchTripsData = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trip`);
};

// Fetch Trips Data Pagination
export const fetchTripsDataPagination = (page) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trip?page=${page}&per_page=10`
  );
};

// Fetch Gallery Data
export const fetchGalleryData = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/gallery`);
};

// Fetch language translate codes
export const fetchLanguageTranslateCodes = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/language-translation?_fields=x_metadata`
  );
};

// fetch Home cover page video data
export const fetchHomePageCoverVideoDatas = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/cover-videos?slug=home-page-cover-video&_fields=id,slug,x_metadata`
  );
};

// Fetch home page bottom cover video data
export const fetchHomePageBottomCoverVideoDatas = () => {
  return axios.get(
    `${
      process.env.NEXT_PUBLIC_WP_API_BASE_URL
    }/cover-videos?${Date.now()}&slug=home-page-bottom-section-cover-video&_fields=id,slug,x_metadata`
  );
};

// Fetch Bhutan Tour Data
export const fetchBhutanTourData = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/bhutantour`);
};

// Fetch Tibet Tour package Data
export const fetchTibetTourData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/tibetpackagetour`
  );
};

// Fetch company about us Data
export const fetchCompanyAboutUsData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/information?slug=about-us`
  );
};

// Fetch Autumn Season Trips
export const fetchAutumnSeasonTrips = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?season=13&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch winter season trips
export const fetchWinterSeasonTrips = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?season=14&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch summer season trips
export const fetchSummerSeasonTrips = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?season=12&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch Spring season trips
export const fetchSpringSeasonTrips = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?season=11&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch Featured Trips datas
export const fetchFeaturedTripsData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?randcat=105&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch popular trips datas
export const fetchPopularTripsData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?randcat=29&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch Special Trips datas
export const fetchSpecialTripsData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?randcat=36&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch Recommended Trips datas
export const fetchRecommendedTripsData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?randcat=106&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch best packages of Nepal
export const fetchBestPackagesOfNepal = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/trips?randcat=107&per_page=6&_fields=id,slug,title,type,x_featured_media_original,x_metadata.wpcf_days`
  );
};

// Fetch Individual Exploration Data
export const fetchIndividualExplorationData = (type, slug) => {
  return axios.get(
    `${
      process.env.NEXT_PUBLIC_WP_API_BASE_URL
    }/${type}?${Date.now()}&slug=${slug}&_fields=id,title,content,type,slug,x_featured_media_original,x_metadata`
  );
};

// Fetch Brochure Datas
export const fetchBrochureDatas = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/brochure?_fields=id,slug,x_featured_media_original,x_metadata`
  );
};

// Fetch Destinations Data
export const fetchDestinationsData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/country?&per_page=6`
  );
};

// Fetch Blogs categories
export const fetchBlogsCategories = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/blog_categories?_fields=id,name,slug`
  );
};

// Fetch first 4 blog posts
export const fetchFirstFourBlogPosts = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/blogs?page=1&per_page=4&_fields=id,title,slug,x_featured_media_original,pure_taxonomies.blog_categories`
  );
};

// Fetch blog Posts with pagination
export const fetchBlogPostsLoadMore = (nextPage) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/blogs?page=${nextPage}&per_page=4&_fields=id,title,slug,x_featured_media_original,pure_taxonomies.blog_categories`
  );
};

// Fetch individual blog post according to slug
export const fetchIndividualBlogPost = (blogPostSlug) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/blogs?slug=${blogPostSlug}&_fields=id,title,slug,date,content,pure_taxonomies.blog_categories,x_featured_media_original`
  );
};

// fetch datas according to categories id
export const fetchDatasAccordingToCategoriesId = (id) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/blogs?blog_categories=${id}&page=1&per_page=4&_fields=id,title,slug,date,content,pure_taxonomies.blog_categories,x_featured_media_original`
  );
};

// Fetch blogs by Categories load more
export const fetchBlogsByCategoriesLoadMore = (onClickCategoryId, nextPage) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/blogs?blog_categories=${onClickCategoryId}&page=${nextPage}&per_page=4&_fields=id,title,slug,date,content,pure_taxonomies.blog_categories,x_featured_media_original`
  );
};

// fetch individual destination data
export const fetchIndividualDestinationData = (pageSlug) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/destinations?slug=${pageSlug}&_fields=id,slug,date,content,title,x_featured_media_original,x_metadata`
  );
};

// Fetch Social medias post links
export const fetchSocialMediaPostsLinks = () => {
  return axios.get(
    `${
      process.env.NEXT_PUBLIC_WP_API_BASE_URL
    }/social_media?slug=facebook-feed-links&_fields=id,title,x_metadata&${Date.now()}`
  );
};

// fetch company profile datas
export const fetchCompanyProfileData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/information?slug=company-profile&_fields=id,title,slug,content,x_featured_media_original,x_metadata`
  );
};

// Fetch Navigation Menu Bar Datas
export const fetchNavigationMenuData = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_WP_API_MENU_URL}?${Date.now()}`);
};

// Fetch Booking and payment datas
export const fetchBookingAndPaymentData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/information?slug=booking-and-payment&_fields=id,x_featured_media_original,x_metadata`
  );
};

// lonely planet guide book
export const fetchLonelyPlanetGuideBook = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/pages?slug=what-says-the-lonely-planet-guide-book&_fields=id,title,content,x_featured_media_original`
  );
};

// Fetch search first four blogs results datas
export const fetchSearchFirstFourBlogsResults = (searchQuery) => {
  return axios.get(
    `${
      process.env.NEXT_PUBLIC_WP_API_BASE_URL
    }/blogs?search=${encodeURIComponent(
      searchQuery
    )}&page=1&per_page=4&_fields=id,title,slug,date,content,pure_taxonomies.blog_categories,x_featured_media_original`
  );
};

// Fetch search blogs results datas load more
export const fetchSearchBlogsResultsLoadMore = (searchQuery, nextPage) => {
  return axios.get(
    `${
      process.env.NEXT_PUBLIC_WP_API_BASE_URL
    }/blogs?search=${encodeURIComponent(
      searchQuery
    )}&page=${nextPage}&per_page=4&_fields=id,title,slug,date,content,pure_taxonomies.blog_categories,x_featured_media_original`
  );
};

// Main Search Fetch Search Datas
export const fetchMainSearchDatas = (searchQuery, nextPage) => {
  return axios.get(
    `${
      process.env.NEXT_PUBLIC_WP_API_BASE_URL
    }/search?subtype[]=trips&subtype[]=bhutantour&subtype[]=destinations&subtype[]=tibetpackagetour&search=${encodeURIComponent(
      searchQuery
    )}&page=${nextPage}&per_page=4&_embed`
  );
};

// Send Subscribe user Data to gravity forms
export const sendSubscribeUserData = (data) => {
  // console.log('data:', process.env.NEXT_PUBLIC_WP_API_MAIN_URL);
  return axios.post(
    "https://cmslog.annapurnatreks.com/wp-json/gf/v2/forms/1/submissions",
    data,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `developer:${process.env.NEXT_PUBLIC_REST_API_DEVELOPER_KEY}`
        ).toString(`base64`)}`,

        "Content-Type": "application/json",
      },
    }
  );
};

// Send Contact us form data to gravity forms
export const sendContactUsFormData = (formData) => {
  // console.log(`DEVELOPER_KEY:`, developerKey);
  // console.log(`Base Url:`, process.env.NEXT_PUBLIC_WP_API_BASE_URL);
  // console.log(`WP_API_MAIN_URL`, process.env.NEXT_PUBLIC_WP_API_MAIN_URL);
  // console.log(`DevApi`, process.env.NEXT_PUBLIC_REST_API_DEVELOPER_KEY);

  // console.log(`formData:`, formData);
  return axios.post(
    `${process.env.NEXT_PUBLIC_WP_GRAVITY_FORM_API_BASE_URL}/2/submissions`,
    formData,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `developer:${process.env.NEXT_PUBLIC_REST_API_DEVELOPER_KEY}`
        ).toString(`base64`)}`,

        "Content-Type": "application/json",
      },
    }
  );
};

// Fetch countries name data
// export const getCountriesNameData = () => {
//   return axios.get(`https://countriesnow.space/api/v0.1/countries`);
// };

// Send Booking Confirmation form Datas
export const sendBookingConfirmationFormData = (formData) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_WP_GRAVITY_FORM_API_BASE_URL}/3/submissions`,
    formData,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `developer:${process.env.NEXT_PUBLIC_REST_API_DEVELOPER_KEY}`

          // `developer:Be49 5SE5 SSH9 aXJ1 O5TG mPgE`
        ).toString(`base64`)}`,

        "Content-Type": "application/json",
      },
    }
  );
};

// Send trip Review form Datas
// `developer:Be49 5SE5 SSH9 aXJ1 O5TG mPgE`
export const sendTripReviewCommentData = (formData) => {
  return axios.post(
    "https://cmslog.annapurnatreks.com/wp-json/wp/v2/comments",
    formData,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `developer:${process.env.NEXT_PUBLIC_REST_API_DEVELOPER_KEY}`
        ).toString(`base64`)}`,

        "Content-Type": "application/json",
      },
    }
  );
};

// Fetch Trip review datas from gravity forms
export const fetchTripReviewDatas = (postId) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/comments?post=${postId}&_fields=id,date,author_name,content`
  );
};

// Fetch gallery images data
export const fetchGalleryImagesData = (nextPage) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_BASE_URL}/gallery?page=${nextPage}&per_page=12&_fields=id,x_featured_media_original`
  );
};

// /gf/v2/forms/7/entries?search_criteria[status]=active&search_criteria[field_filters][0][key]=7.1&search_criteria[field_filters][0][value]=2429&search_criteria[field_filters][0][operator]=is&search_criteria[field_filters][1][key]=1.1&search_criteria[field_filters][1][value]=Approve Comment&search_criteria[field_filters][1][operator]=is_not_empty
