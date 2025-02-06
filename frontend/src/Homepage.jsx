import React from 'react'

const Homepage = ({showcompanieshandler}) => {
  return (
    <>
    <div className="homepage">
    <div className='homepagecontent'>
        <h1>IT Companies in India</h1>
        <p>Software companies are organizations that specialize in designing, developing, and maintaining software products and services. These companies create various types of software, including operating systems, applications, databases, and cloud-based solutions, to meet the needs of businesses and consumers. Some well-known software companies, such as Microsoft, Google, and Oracle, focus on developing enterprise solutions, productivity tools, and innovative technologies. Others, like startups, work on niche software solutions, mobile applications, and AI-driven platforms. Software companies play a crucial role in the digital era, driving technological advancements, automation, and efficiency across industries such as healthcare, finance, education, and entertainment.</p>
      <img id='banner' src="images/banner.png" alt="" />
       <p id='productpara'>Product-based companies are businesses that develop and sell their own software products to a wide range of customers. These companies focus on creating high-quality, scalable solutions such as operating systems, cloud platforms, and enterprise applications. Examples include Microsoft, Google, and Adobe, which build and maintain products like Windows, Google Workspace, and Photoshop. Unlike service-based companies, which provide customized solutions for clients, product-based companies prioritize innovation, research, and continuous updates to enhance their products and stay competitive in the market.</p>
        <img id='pbcimg' src="images/pbc.jpg" alt="" />
        <p id='servicepara'>Service-based companies provide customized software solutions, IT consulting, and support services to clients based on their specific needs. These companies do not develop their own products but instead offer services such as software development, maintenance, testing, and cloud solutions. Examples include TCS, Infosys, and Wipro, which work with various industries like healthcare, finance, and retail. Service-based companies focus on client requirements, project-based work, and delivering tailored solutions to help businesses improve efficiency and achieve their goals.</p>
        <img id='svcimg' src="images/sbc.jpg" alt="" />
    </div>
    <button className='addcompbtn' onClick={showcompanieshandler}>Add Company</button>
    </div>
    </>
  )
}

export default Homepage