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
    createUserURL();
    storyListURL();
    storyURL(storyId);
    submitStoryURL();
    deleteStoryURL(storyId);
}

export class TestURL implements ServiceURL {
  public loginURL() {
    return 'https://taleaddaapi.herokuapp.com/taleadda/authenticate';
  }

  public createUserURL() {
    return 'https://taleaddaapi.herokuapp.com/taleadda/createUser';
  }

  public storyListURL() {
    return 'https://taleaddaapi.herokuapp.com/taleadda/stories';
  }

  public storyURL(storyId) {
    return 'https://taleaddaapi.herokuapp.com/taleadda/story/' + storyId;
  }

  public submitStoryURL() {
    return 'https://taleaddaapi.herokuapp.com/taleadda/story/submit';
  }

  public deleteStoryURL(storyId) {
    return 'https://taleaddaapi.herokuapp.com/taleadda/deleteStory/' + storyId;
  }
}

export class RestEndPointURL implements ServiceURL {
    public loginURL() {  } // Not Implemented!
    public createUserURL() {  } // Not Implemented!
    public storyListURL() {  } // Not Implemented!
    public storyURL(storyId) {  } // Not Implemented!
    public submitStoryURL() {  } // Not Implemented!
    public deleteStoryURL(storyId) {  } // Not Implemented!
}

