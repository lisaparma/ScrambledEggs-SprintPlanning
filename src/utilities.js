import {forEach} from "lodash";
import html2canvas from "html2canvas";

export function calcTotal(allMates, mates, emergency) {
  let total = 0;
  forEach(mates, (mate) => {
    if (allMates[mate]) {
      const user = allMates[mate];
      const mateAvailability = (user.h + user.d * 8) * user.efficiency / 100;
      total = total + mateAvailability
    }
  });
  return total*(100 - emergency) / 100;
}


export function decodeJSON(fileJSON) {
  const info = {
    teamName: fileJSON.teamName || "DreamTeam",
    date: fileJSON.date || Date.now()
  };
  const mates = fileJSON.people;
  let groups = {};
  if (fileJSON.hasOwnProperty("groups")) {
    groups = fileJSON.groups
  }
  else {
    const groupMates = [];
    forEach(mates, (mate, key) => groupMates.push(key));
    groups = {
      group1: {
        name: fileJSON.teamName || "Team",
        mates: groupMates,
        emergency: 0
      }
    }
  }

  return { info, groups, mates };
}

/**
 * Generates the relative screenshot of a specific dom element. If isDownloadable is false than the function does not
 * generate the link to download but returns the screenshot, otherwise a link pointing to the image to download is
 * created. The scroll is positioned to zero before capturing the screenshot and then it is restored.
 *
 * @param selector represents the element to capture
 * @param isDownloadable is false if the image should be shown in the modal, true if the image should be downloaded.
 * @return a Promise that returns the screenshot captured or it creates the link to download the image.
 * @author Federico Rispo
 */
export function generateScreenshot(selector, isDownloadable) {
  /*
   * Get the dimensions of the element to screenshot and add 5 pixel to them because the html2canvas library probably
   * adds a little margin to the left and this causes a few pixels to be cut to the right.
   */
  const widthScreenshot = document.getElementById(selector).clientWidth + 10;
  const heightScreenshot = document.getElementById(selector).clientHeight + 5;

  const height = window.scrollY;
  window.scrollTo(0, 0);
  let promiseCanvas = html2canvas(document.querySelector(
    `#${selector}`),
    {width: widthScreenshot, height: heightScreenshot}
  );
  window.scrollTo(0, height);

  return promiseCanvas
  .then(canvas => {
    const screenshot = canvas.toDataURL();

    if (!isDownloadable) {
      return screenshot;
    }

    // Generate the link
    const link = document.createElement("a");
    const date = new Date();
    link.download = `sprintPlanning_${selector}_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    link.href = screenshot;
    link.click();
  });
}