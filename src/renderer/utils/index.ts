import moment from "moment";

export function trafficLightPositionForMac(titlebarHeight: number) {
  const trafficLightsBtnDimension = 20;
  const trafficLightBtnsLeftPos = 12;
  const trafficLightBtnsTopPos = (titlebarHeight - trafficLightsBtnDimension) / 2;
  return { x: trafficLightBtnsLeftPos, y: trafficLightBtnsTopPos };
}

export const createStandardURL = (inputUrl: string) => {
  let url = inputUrl.trim(); // Trim any extra spaces
  const defaultSearchEngine = "https://www.google.com/search?q="; // Default search engine
  const tld = ".com"; // Default TLD if none is provided

  // Check if input looks like an IP address or has a valid domain structure
  const isLikelyValidDomain = (url: string) => {
    const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;
    const ipPattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return domainPattern.test(url) || ipPattern.test(url);
  };

  // If it’s a keyword or invalid domain, treat it as a search query
  if (!isLikelyValidDomain(url)) {
    url = defaultSearchEngine + encodeURIComponent(inputUrl); // Perform search query
    return url
  } else {
    // If the user enters something like "google" or "google."
    if (!url.includes(".") && !url.startsWith("http")) {
      url += tld; // Append the default TLD if no dot is found
    }
    // If the user entered a domain but without protocol
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      // Check if "www" is needed
      if (!url.startsWith("www.")) {
        url = "www." + url;
      }
      url = `https://${url}`;
    }
  }

  return url;
};

export const formatDate = (dateString: string) => {
  const date = moment(dateString);

  const isToday = date.isSame(moment(), 'day');

  const isYesterday = date.isSame(moment().subtract(1, 'day'), 'day');

  const formattedDate = date.format('dddd D MMM YYYY');

  if (isToday) {
    return `Today - ${formattedDate}`;
  } else if (isYesterday) {
    return `Yesterday - ${formattedDate}`;
  } else {
    return formattedDate;
  }
}

  