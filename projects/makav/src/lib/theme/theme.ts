export interface Theme {
  name: string;
  properties: any;
}

export const purple: Theme = {
  name: "purple",
  properties: {
    "--wrapper-border-radius": "35px",
    "--title-color": "#641768",
    "--sub-title-color": "#41474d",
    "--title-weight": "bold",
    "--submitbtn-bg": "#641768",
    "--submitbtn-text-color": "#ffffff",
    "--submitbtn-width":"none",
    "--input-placeholder-color": "#a3b9cc",
    "--input-bg": "#F2F0F2",
    "--input-border": "7px",
    "--input-border-bottom":"none",
    "--box-background": "#F9F7F9",
    "--box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    "--box-border":"none",
    "--box-height": "385px"
  }
};

export const ocean: Theme = {
  name: "ocean",
  properties: {
    "--wrapper-border-radius": "25px",
    "--title-color": "#53a9ff",
    "--sub-title-color": "#b0d8ff",
    "--title-weight": "bold",
    "--submitbtn-bg": "#1265b8",
    "--submitbtn-text-color": "#ffffff",
    "--submitbtn-width":"none",
    "--input-placeholder-color": "#a3b9cc",
    "--input-bg": "#F2F0F2",
    "--input-border": "7px",
    "--input-border-bottom":"none",
    "--box-background": "#ffffff",
    "--box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    "--box-border":"3px solid #6CB4EE",
    "--box-height": "415px"
  }
};


export const primary: Theme = {
  name: "primary",
  properties: {
    "--wrapper-border-radius": "0px",
    "--title-color": "#082d52",
    "--sub-title-color": "#243648",
    "--title-weight": "bold",
    "--submitbtn-bg": "#0039a6",
    "--submitbtn-text-color": "#ffffff",
    "--submitbtn-width":"100%",
    "--input-placeholder-color": "#859eb4",
    "--input-bg": "#ffffff",
    "--input-border": "0px",
    "--input-border-bottom":"1px solid #1890ff",
    "--box-background": "none",
    "--box-shadow": "none",
    "--box-border":"none",
    "--box-height": "415px"
  }
};


