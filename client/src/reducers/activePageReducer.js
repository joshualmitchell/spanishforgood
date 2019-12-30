import { SET_ACTIVE_PAGE } from "../actions/types";
import {
  HOME,
  PRICES,
  CONTACT,
  ABOUT,
  DETAILS,
  RESOURCES
} from "../components/staticPages/staticPagesConstants";

export default function(
  oldActivePagesObject = {
    homeActive: "item active",
    pricesActive: "item",
    contactActive: "item",
    aboutActive: "item",
    detailsActive: "item",
    resourcesActive: "item"
  },
  action
) {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      const activePagesObject = {
        homeActive: "item",
        pricesActive: "item",
        contactActive: "item",
        aboutActive: "item",
        detailsActive: "item",
        resourcesActive: "item"
      };
      switch (action.activePage) {
        case HOME:
          activePagesObject.homeActive = "item active";
          break;
        case PRICES:
          activePagesObject.pricesActive = "item active";
          break;
        case CONTACT:
          activePagesObject.contactActive = "item active";
          break;
        case ABOUT:
          activePagesObject.aboutActive = "item active";
          break;
        case DETAILS:
          activePagesObject.detailsActive = "item active";
          break;
        case RESOURCES:
          activePagesObject.resourcesActive = "item active";
          break;
        default:
          break;
      }
      return activePagesObject;
    default:
      return oldActivePagesObject;
  }
}
