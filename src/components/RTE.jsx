import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import { Controller } from 'react-hook-form';


export default function RTE({name,control,label,defaultValue=""}) {
    


    return(
        <div className='w-full'> 
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
    
        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}}) => (
            <Editor
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",  
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />
        )}
        />
    
         </div>
    )
};

/*

here what we do is that we give control of our editor componenet I.e. RTE to the react hook form so that it can extract content from it
to do this we create a component in such a way that it will take 4 param/props  1.name 2.control {to pass the control of this conponenet}
3.label 4.defaultValue {the content if given is storeed in this or is kept empty by default}

so the way we return the componenet is that 
1. we give it the label 
2. the we Bring the <Controller /> component from react hook so that we can connect the RTE with it to extract content from RTE
    inside that Controller component we pass name ,controll and what to render
    name we keep what is given in props or content by default 
    control is taken from props 
    render = this is a call back which takes  params of field and an event on what it should render the element 
    so field:{onChange} means that element which is supposed to be render will re-render everytime there is an Onchange in it
    i.e.<Editor /> component will re-render on every Onchange Event 


*/