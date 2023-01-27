import {
    GetHeadConfig,
    GetPath,
    GetRedirects,
    HeadConfig,
    Template,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
  } from "@yext/pages";
  import * as React from "react";
  // import Banner from "../components/banner";
  // import Details from "../components/details";
  // import Hours from "../components/hours";
  // import List from "../components/list";
  // import PageLayout from "../components/page-layout";
  // import StaticMap from "../components/static-map";
  // import Favicon from "../public/yext-favicon.ico";
  import "../index.css";
  import Header from "../components/layouts/header";
  import Footer from "../components/layouts/footer";
  import Hours from "../components/commons/hours";
  
  /**
   * Required when Knowledge Graph data is used for a template.
   */
  export const config: TemplateConfig = {
    stream: {
      $id: "my-stream-id-1",
      // Specifies the exact data that each generated document will contain. This data is passed in
      // directly as props to the default exported function.
      fields: [
        "id",
        "uid",
        "meta",
        "name",
        "address",
        "photoGallery",
        "c_locationAddress",
        "slug",
        "hours"

      ],
      // Defines the scope of entities that qualify for this stream.
      filter: {
        entityTypes: ["location"],
      },
      // The entity language profiles that documents will be generated for.
      localization: {
        locales: ["en"],
        primary: false,
      },
    },
  };
  
  /**
   * Defines the path that the generated file will live at for production.
   *
   * NOTE: This currently has no impact on the local dev path. Local dev urls currently
   * take on the form: featureName/entityId
   */
  export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return document.slug
      ? document.slug
      : `${document.id.toString()}`;
  };
  
  /**
   * Defines a list of paths which will redirect to the path created by getPath.
   *
   * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
   * a new deploy.
   */
  export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
    return [`index-old/${document.id.toString()}`];
  };
  
  /**
   * This allows the user to define a function which will take in their template
   * data and produce a HeadConfig object. When the site is generated, the HeadConfig
   * will be used to generate the inner contents of the HTML document's <head> tag.
   * This can include the title, meta tags, script tags, etc.
   */
  export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }): HeadConfig => {
    return {
      title: document.name,
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      tags: [
        {
          type: "meta",
          attributes: {
            name: "description",
            content: document.description,
          },
        },
        {
          type: "link",
          attributes: {
            rel: 'icon',
            type: 'image/x-icon',
            // href: Favicon
          },
        }
      ],
    };
  };
  
  /**
   * This is the main template. It can have any name as long as it's the default export.
   * The props passed in here are the direct stream document defined by `config`.
   *
   * There are a bunch of custom components being used from the src/components folder. These are
   * an example of how you could create your own. You can set up your folder structure for custom
   * components any way you'd like as long as it lives in the src folder (though you should not put
   * them in the src/templates folder as this is specific for true template files).
   */
  const Location: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }) => {
    const {
      name,
      address,
      photoGallery,
      c_locationAddress,
      slug,
      hours
      
      
    } = document;
    // const images = photoGallery.map((img:any)=>{
    //  return <img src={img.image.url}/>
    //  })
  
    return (
        <>   
       <div>
        <Header/>
           
            <div className="centered-container">
              <div className="section">
                <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                  
                  
                  <div className="bg-neutral-800 p-2">
                    <p>{`name: ${name}`}</p>
                  </div>
                  <div className="bg-amber-100 p-2">
                    <p>{`address : ${address.line1}`}</p>
                  </div>  
          
                  <div className="bg-amber-100 p-2">
                    <p>{`City: ${address.city}`}</p>
                  </div>
                 
                  <div className="bg-amber-100 ">
                    <p>{`State: ${address.region}`}</p>
                  </div>
                  <div className="bg-amber-100">
                    <p>{`About: ${c_locationAddress.description}`}</p>
                  </div>
                  <div>Opening time : <Hours hours={hours}/></div>
                 
                 
                  
                  </div>            
               {/* <div className="bg-gray-100">{images}</div>  */}
            </div>
                  
                </div>
              </div>
            {/* </div>
          </div>
        </div> */}
          <Footer/>
          
        </>
      );
    };
    
    export default Location;