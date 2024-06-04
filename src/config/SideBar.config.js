import {Photo, StarBorderOutlined, SendOutlined, NoteOutlined, InsertDriveFileOutlined, MailOutlined} from '@mui/icons-material';

export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Photo
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarBorderOutlined
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined
    },
    {
        name: 'draft',
        title: 'Drafts',
        icon: NoteOutlined
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: InsertDriveFileOutlined
    },
    {
        name: 'allMails',
        title: 'All Mails',
        icon: MailOutlined
    }
];