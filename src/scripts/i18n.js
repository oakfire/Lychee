/**
 * @description This module is used to implement i18n.
 */

i18n = {
    locales: ['en', 'zh_CN'],
    locale: 'zh_CN',
}


i18n.en = {
    'Upload Photo': 'Upload Photo',
    'Import from Link': 'Import from Link',
    'Import from Dropbox': 'Import from Dropbox',
    'Import from Server': 'Import from Server',
    'New Album': 'New Album',
    'Change Login': 'Change Login',
}

i18n.zh_CN = {
    'Upload Photo': '上传照片',
    'Import from Link': '从链接导入照片',
    'Import from Dropbox': '从 Dropbox 导入照片',
    'Import from Server': '从服务器导入',
    'New Album': '新增相簿',
    'Change Login': '修改密码',
}


i18n.t = function(key){
    return i18n[i18n.locale][key] || key;
}