import React from 'react';
import { Input, Button } from 'reactstrap';


function PostForm (props) {
  const {
    post = {},
    onSubmit = () => {},
    onChange = () => {}
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = name => event => {
    onChange({[name]: event.currentTarget.value});
  };

  return (
    <form
      className="PostForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title">Project Title</label>
        <Input
            type="text"
            value={post.title}
            placeholder="Enter company title"
            onChange={handleChange("title")}
          />
      </div>

      <div>
      <label htmlFor="executive_summary">Project Executive Summary</label>
        <Input
            type="textarea"
            value={post.executive_summary}
            placeholder="Enter executive_summary"
            onChange={handleChange("executive_summary")}
          />
      </div>

      <div>
        <label htmlFor="product_details">Product Details</label>
        <Input
            type="textarea"
            value={post.product_details}
            placeholder="Enter your product_details"
            onChange={handleChange("product_details")}
          />
      </div>

      <div>
        <label htmlFor="project_description">Project Description</label>
        <Input
            type="textarea"
            value={post.project_description}
            placeholder="Enter your project_description"
            onChange={handleChange("project_description")}
          />
      </div>

      <div>
        <label htmlFor="market_sales">Market & Sales</label>
        <Input
            type="textarea"
            value={post.market_sales}
            placeholder="Enter your market_sales"
            onChange={handleChange("market_sales")}
          />
      </div>


      <div>
        <br />
        <Button type="submit" bsStyle="secondary" value="Submit">Submit</Button>
      </div>
    </form>
  );
}


export {PostForm}
