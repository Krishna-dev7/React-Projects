import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";
import { Input, Button, Logo, RTE } from "../components";

function PostForm({post}) {
  
  const navigate = useNavigate();
  const { register, handleSubmit, setValue,
     getValues, watch, control } = useForm({
      defaultValues: {
        title: post ? post.title : "",
      }
     });
  const userData = useSelector( state => state.auth.userData );

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
      file && await appwriteService.deleteFile( post.featuredImage );
      const dbPost = await appwriteService.updatePost( post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      } )

      if (dbPost) {
        navigate(`/posts/${ dbPost.$id }`);
      }
    } else {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
      const dbPost = await appwriteService.createPost( {
        ...data,
        featureImage: file ? file.$id : undefined,
      } )

      if (dbPost) {
        navigate(`/posts/${dbPost.$id}`);
      }
    }
  }

  const slugTransform = useCallback( (slug) => {
    if (slug && typeof slug == "string") {
      return slug
              .trim()
              .toLowerCase()
              .replace(/ [^a-zA-Z0-9]+g/, '-');
    } 
    return "";
  }, [] )

  useEffect( () => {
    const subscription = watch( (value, { name }) => {
      if (name == "title") {
        setValue(name, slugTransform(value.title), { shouldValidate: true } );
      }
    } )

    return () => subscription.unsubscribe();
  }, [watch, setValue, slugTransform] );

  
  return (

    // TODO: modify classes
    <form onSubmit={handleSubmit(submit)}>
      <div className="" >
        <Input 
        type="text"
        label="Title"
        placeholder="Enter your title: "
        { ...register("title", {
          required: true,
        }) } />

        <Input 
        label="Slug"
        placeholder="Slug"
        { ...register("slug", {
          required: true,
        }) }
        onChnage = { (e) => {
          setValue("slug", e.target.value, { shouldValidate: true });
        } } />
      </div>

      
    </form>
  )

}

export default PostForm;