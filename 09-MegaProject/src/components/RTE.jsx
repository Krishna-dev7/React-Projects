import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, label, control, defaultValue = "" }) {
  
  return (
    <Controller
      name = { name || "content" }
      label = { label ?? "content" }
      control = { control }
      render={ ({field: { onChange }}) => (
        <Editor
          initialValue= { defaultValue }
          init= { {
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
            toolbar : " undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help "          
          } }

          onEditorChange= { onChange }
        />
      ) }
     />
  )

}

export default RTE;