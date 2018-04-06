export class URLMapper {
    private static instance: URLMapper;
    private serviceURL: ServiceURL;

    constructor() {
        this.serviceURL = new TestURL();
        // this.serviceURL = new RestEndPointURL();
    }

    public static getURL(): ServiceURL {
        if (this.instance == null) {
            this.instance = new URLMapper();
        }
        return this.instance.serviceURL;
    }
}

export interface ServiceURL {
    loginURL();
    storyListURL();
    storyURL(storyId);
}

export class TestURL implements ServiceURL {
  public loginURL() {
    console.log('------------------' + location.origin + '--------------------');
    return 'https://firebasestorage.googleapis.com/v0/b/readadda-5d474.appspot.com/o/' +
      'stories%2FloginData.json?alt=media&token=e27cfb8e-1b9b-4880-a7ed-8d409386cf50';
  }

  public storyListURL() {
    console.log('------------------' + location.origin + '--------------------');
    return 'https://firebasestorage.googleapis.com/v0/b/readadda-5d474.appspot.com/o/' +
      'stories%2FstoryList.json?alt=media&token=9d41b6df-ba5d-49a5-ac6f-2478eddfd53d';
  }

  public storyURL(storyId) {
    console.log('------------------Return Story URL : ' + storyId + '--------------------');
    return 'https://firebasestorage.googleapis.com/v0/b/readadda-5d474.appspot.com/o/' +
      'stories%2Fstory.json?alt=media&token=55632eef-d813-4e81-a864-411d1809db3d';
  }
}

export class RestEndPointURL implements ServiceURL {
    public loginURL() {  } // Not Implemented!
    public storyListURL() {  } // Not Implemented!
    public storyURL(storyId) {  } // Not Implemented!
}

