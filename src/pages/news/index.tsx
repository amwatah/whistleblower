import React from "react";
import { NewsCard } from "../../components/sections/Newscard";

function NewsPage() {
  return (
    <div className=" grid gap-2 sm:grid-cols-2 md:grid-cols-3 ">
      <NewsCard
        title="Governor's aide arrested over embezzlement of county funds"
        description="Governor's aide arrested over embezzlement of county funds
          The arrest of the Governor's aide has sent shockwaves through Kilifi County, with many residents expressing their disappointment and anger at the betrayal of their trust. The aide was a trusted member of the Governor's inner circle and was responsible for overseeing county development projects, making the allegations of embezzlement even more shocking. It is alleged that the aide used his position of authority to siphon off millions of shillings meant for development projects, which has affected the county's ability to deliver services to its residents. The Governor has since condemned the alleged embezzlement and vowed to cooperate with the authorities to ensure that those responsible are brought to justice."
        location="Kilifi County, Kilifi North Constituency"
        badges={["Embezzlement", "Kilifi County", "Corruption"]}
        image="https://images.unsplash.com/photo-1521437100987-e1cb2178879b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
      <NewsCard
        title="MP implicated in land grab scandal in Maasai herding estates"
        description="The land grab scandal in Kajiado County has caused uproar among the residents who feel that their elected leaders are not acting in their best interest. The MP at the center of the scandal has denied any wrongdoing, but calls for his resignation have grown louder. The scandal has also brought to light the issue of land grabbing in the county, which has been a long-standing problem. Residents who have been affected by land grabbing are calling for more action to be taken to address the issue, including stricter laws and enforcement of existing regulations. The scandal has also highlighted the need for greater transparency and accountability in the allocation of public land"
        badges={["Embezzlement", "Kajiado County"]}
        location="Kajiado County, Constituency not specified"
        image="https://images.unsplash.com/photo-1602794944783-227f826f9d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
      <NewsCard
        title="Auditor General uncovers irregularities in procurement process"
        description="The Auditor General has uncovered irregularities in the procurement process of a major government project, raising questions about the integrity of the process and the ability of the government to manage public resources effectively. The report has highlighted the need for more transparency in government procurement to prevent such irregularities from happening in the future. The scandal has also sparked calls for those responsible to be held accountable, with some civil society groups calling for criminal charges to be filed against those involved. The scandal has cast a shadow over the government's efforts to promote transparency and accountability in public procurement."
        badges={["Fraud", "Reports", "National"]}
        location="Kenya"
        image="https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
      <NewsCard
        title="Ministry officials accused of misusing funds meant for drought relief"
        description="Ministry officials have been accused of misusing funds meant for drought relief in Turkana County, leaving residents who have been hard hit by drought in recent years frustrated and angry. The mismanagement of funds has further worsened the situation for the residents who were depending on the relief to survive. The officials accused of misusing the funds are yet to respond to the accusations, and the matter is being investigated by relevant authorities. The scandal has highlighted the need for greater oversight and accountability in the management of relief funds, especially during times of crisis when the most vulnerable members of society are at risk."
        badges={["Misuse", "Scandal", "Drought"]}
        location="Turkana County, Constituency not specified"
        image="https://images.unsplash.com/photo-1593349783603-654a7069d88d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      />
      <NewsCard
        title="Contractor disappears with county funds"
        description="A contractor who was awarded a contract to construct a major road in Uasin Gishu County has disappeared with county funds, leaving residents frustrated and angry. The road project was expected to improve transport and boost economic activity in the area, but the disappearance of the contractor has left the project in limbo. The county government has been criticized for its lax oversight of the project, with some residents calling for greater accountability and transparency in the awarding of contracts. The search for the contractor is ongoing, but there are fears that the county may never recover the funds, which were meant for the development of the county. The scandal has highlighted the need for greater oversight and
        accountability in the awarding of contracts, as well as the need for stricter penalties for contractors who abscond with public funds"
        badges={["Theft", "Fraud"]}
        location="Uasin Gishu County"
        image="https://images.unsplash.com/photo-1630288214173-a119cf823388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
      />
      <NewsCard
        title=" Local businessman implicated in illegal ivory trade"
        description="A local businessman has been implicated in the illegal ivory trade in the country, following a raid by wildlife authorities on his premises. The businessman is alleged to have been involved in the smuggling of ivory to foreign countries, leading to the decline of elephant populations in the country. The raid also uncovered other illegal wildlife products, leading to calls for greater action to be taken against those involved in the illegal trade. The scandal has highlighted the need for stronger penalties for those involved in the illegal wildlife trade, as well as greater awareness of the impact of the trade on the country's biodiversity."
        badges={["Kwale County", "Poaching", "Ivory Smuggling"]}
        location="Kachemeli , Kwale County"
        image="https://plus.unsplash.com/premium_photo-1661861726461-d62b9ac2cb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      />
      <NewsCard
        title="Former governor arrested for misuse of public funds"
        description="A former governor of a county in Western Kenya has been arrested over allegations of misuse of public funds during his time in office. The former governor is alleged to have misappropriated millions of shillings meant for development projects, leading to the stalling of key infrastructure projects in the county. The arrest has been welcomed by residents who have long called for action to be taken against corrupt officials in the county. The scandal has highlighted the need for greater accountability and transparency in the management of public resources, especially at the county level."
        badges={["Western Kenya", "County Goverment"]}
        location="Western Kenya"
        image="https://images.unsplash.com/photo-1557081999-da7330de1277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
      />
    </div>
  );
}

export default NewsPage;
