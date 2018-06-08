
export class Story {
  storyId: number;
  title: string;
  storyShortDescription: string;
  modifiedDate: string;
  authorName: string;
  likes: number;
  disLikes: number;
  content: string;
  searchTags: string;
  createdBy: string;
  createdDate: string;
  currentStatus: PublishStatus;
  deniedReason: string;
  statusHistory: StatusHistory[];

  public constructor(init?: Partial<Story>) {
    Object.assign(this, init);
  }
}

class StatusHistory {
  statusChangedTo: PublishStatus;
  statusChangedFrom: PublishStatus;
  changedOn: string;
  changedBy: string;
}

enum PublishStatus {
  PENDING,
  DENIED,
  APPROVED
}
