export interface FolderModel {
    type: 'folder' | 'file' | 'unset' | null;
    name?: string;
    children?: FolderModel[];
    id: string | undefined;
}