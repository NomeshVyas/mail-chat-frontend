export const API_URL = {
    saveSentEmail: {
        endpoint: 'save',
        method: 'POST' 
    },
    getEmailFromType: {
        endpoint: 'emails',
        method: 'GET'
    },
    saveDraftEmail: {
        endpoint: 'save-draft',
        method: 'POST'
    },
    moveEmailsToBin: {
        endpoint: 'bin',
        method: 'POST'
        },
    toggleStarredEmail: {
        endpoint: 'starred',
        method: 'POST'
    },
    deleteEmails: {
        endpoint: 'delete',
        method: 'DELETE'
    }
}