export class URLMapper {
    private static instance: URLMapper;
    private serviceURL: ServiceURL;

    constructor() {
        this.serviceURL = new TestURL();
        //this.serviceURL = new RestEndPointURL();
    }

    public static getURL(): ServiceURL {
        if (this.instance == null) {
            this.instance = new URLMapper();
        }
        return this.instance.serviceURL;
    }
}

export interface ServiceURL {
    storyListURL();
    storyURL(storyId);
}

export class TestURL implements ServiceURL {
    public storyListURL() { console.log('------------------' + location.origin + '--------------------');
      return 'https://firebasestorage.googleapis.com/v0/b/readadda-5d474.appspot.com/o/' +
        'stories%2FstoryList.json?alt=media&token=3f0eaab9-3550-43ef-a681-e653149a7256';
    }
    public storyURL(storyId) { return 'https://firebasestorage.googleapis.com/v0/b/readadda-5d474.appspot.com/o/' +
      'stories%2Fstory.json?alt=media&token=61ffb84d-da99-4a69-8fa0-4261aec2d511';
    }
}

export class RestEndPointURL implements ServiceURL {
    public storyListURL() {  } // Not Implemented!
    public storyURL(storyId) {  } // Not Implemented!
}

