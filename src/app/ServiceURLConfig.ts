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
    return 'http://taleaddaapi.herokuapp.com/taleadda/authenticate';
  }

  public storyListURL() {
    console.log('------------------' + location.origin + '--------------------');
    return 'https://taleaddaapi.herokuapp.com/taleadda/stories';
  }

  public storyURL(storyId) {
    console.log('------------------Return Story URL : ' + storyId + '--------------------');
    return 'https://taleaddaapi.herokuapp.com/taleadda/story/' + storyId;
  }
}

export class RestEndPointURL implements ServiceURL {
    public loginURL() {  } // Not Implemented!
    public storyListURL() {  } // Not Implemented!
    public storyURL(storyId) {  } // Not Implemented!
}

