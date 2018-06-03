/**
 * @typedef POI
 * 
 * Point of Interest within Story Trotter
 * 
 * @property {string} id Autogenerated ID for a POI. downcased traincase, ex "something-happened-here"
 * @property {string} name Human-readable title for the POI, ex "Something happened here"
 * @property {string} description Human-readable description for POI, can be long
 * @property {string} owner Email of user who submitted
 * @property {double} lat Latitude of POI, in decimals, ex -70.234234
 * @property {double} long Longitude of POI, in decimals, ex 30.8372
 * @property {blob} images (Optional) base64 blob of images, defaults is null
 * @property {string} location_name (Optional) Higher-level location, such as name of a city, ex "Austin, TX"
 * @property {string} sources (Optional) 
 * @property {string[]} tags (Optional) Array of string tags, ex ["tag1","tag2"]
 * @property {string} address (Optional) Street address, ex "105 E 5th St, Austin, TX 78701"
 * @property {timestamp} timestamp (Optional) If event is instantaneous, such as a speech, this is set to that date.
 * @property {timestamp} timestamp_end (Optional) If an event not instantaneous, but has a duration, time begins in `timestamp` and ends in this `timestamp_end` value, constituting a duration
 * @property {timestamp} timestamp_created Autogenerated timestamp for when POI entry is created
 * 
 * @example
 * {
 *       "address": "2313 Red River St, Austin, TX 78705",
 *       "collection": "[Lyndon B Johnson]",
 *       "description": "This is also where his wife lay in repose in July of 2007",
 *       "id": "lbj-library-repose",
 *       "images": "",
 *       "item_id": "5a7c7a6c-2566-4625-b4f3-1216fa10df46",
 *       "lat": 30.285797,
 *       "location_name": "Austin, TX",
 *       "long": -97.729343,
 *       "name": "Lyndon Johnson's body was taken here after his death, and more than 32,000 people attended to pay their last respects.",
 *       "owner": "douglessismore@gmail.com",
 *       "sources": "http://www.lbjlibrary.org/page/library-museum/memorable-moments-at-the-lbj-library",
 *       "tags": "[]",
 *       "timestamp": "1973-01-23T00:00:00Z",
 *       "timestamp_created": null,
 *       "timestamp_end": "1973-01-23T00:00:00Z"
 * }
 */

/**
 * @property {number} radius_meters Radius to search for POIs
 */
var Configuration = {
    defaultRadiusMeters: 100000
}


  