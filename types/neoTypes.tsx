export type NeoData = {
  links: {
    next: String,
    previous: String,
    self: String,
  },
  element_count: number,
  near_earth_objects: {
    (date: String) : [NearEarthObject],
    (date: String) : [NearEarthObject],
    (date: String) : [NearEarthObject],
    (date: String) : [NearEarthObject],
    (date: String) : [NearEarthObject],
    (date: String) : [NearEarthObject],
    (date: String) : [NearEarthObject],
    (date: String) : [NearEarthObject]
  }
}

export type NearEarthObject = {
    links: {
      (self: String) : String
    },
    id: String,
    neo_reference_id: String,
    name: String,
    nasa_jpl_url: String,
    absolute_magnitude_h: number,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: number,
        estimated_diameter_max: number,
      },
      meters: {
        estimated_diameter_min: number,
        estimated_diameter_max: number,
      },
      miles: {
        estimated_diameter_min: number,
        estimated_diameter_max: number,
      },
      feet: {
        estimated_diameter_min: number,
        estimated_diameter_max: number,
      }
    },
    is_potentially_hazardous_asteroid: Boolean,
    close_approach_data: [CloseApproachData],
    is_sentry_object: Boolean
}

export type CloseApproachData = {
  close_approach_date: String,
  close_approach_date_full: String,
  epoch_date_close_approach: 1671315960000,
  relative_velocity: {
    kilometers_per_second: String,
    kilometers_per_hour: String,
    miles_per_hour: String
  },
  miss_distance: {
    astronomical: String,
    lunar: String,
    kilometers: String,
    miles: String
  },
  orbiting_body: String
}
