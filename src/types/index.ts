export interface GalleryItem {
    src: string;
    width: number;
    height: number;
    title: string;
    description?: string;
  }
  
  export interface StudentInfo {
    name: string;
    course: string;
  }
  
  export interface ExhibitData {
    title: string;
    subtitle: string;
    description: string[];
    galleryItems: GalleryItem[];
    studentInfo: StudentInfo;
  }