import React, {Component} from 'react';
import FileUpload from 'react-fileupload';

let aaa = 1;
let bbb = 1;


class UploadFile extends Component {
    options = {
        baseUrl: './upload',
        param: {
            category: '1',
            _: Date().getTime()
        },
        dataType: 'json',
        wrapperDisplay: 'inline-block',
        multiple: true,
        numberLimit: 9,
        accept: 'image/*',
        chooseAndUpload: false,
        paramAddToField: {purpose: 'save'},
        // fileFieldName : 'file',
        fileFieldName(file) {
            return file.name;
        },
        withCredentials: false,
        requestHeaders: {'User-Agent': 'So Aanyip'},
        chooseFile: function (files) {
            console.log('you choose', typeof files === 'string' ? files : files[0].name);
        },
        beforeUpload: function (files, mill) {
            if (typeof files === 'string') return true;
            if (files[0].size < 1024 * 1024 * 20) {
                files[0].mill = mill;
                return true;
            }
            return false;
        },
        doUpload: function (files, mill) {
            console.log('you just uploaded', typeof files === 'string' ? files : files[0].name);
        },
        uploading: function (progress) {
            console.log('loading...', progress.loaded / progress.total + '%');
        },
        uploadSuccess: function (resp) {
            console.log('upload success..!');
        },
        uploadError: function (err) {
            alert(err.message);
        },
        uploadFail: function (resp) {
            alert(resp);
        }
    };

    render() {
        return (
            <div>
                <FileUpload>
                    <button ref='btn'>upload</button>
                </FileUpload>
            </div>
        );
    }
}

export default UploadFile;
