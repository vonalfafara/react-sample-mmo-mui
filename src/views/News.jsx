import { useState, useEffect } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import http from "../lib/axios"

const News = () => {
  const [news, setNews] = useState([])
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    async function getNews() {
      const res = await http.get("/latestnews")
      setNews(res.data)
    }
    getNews()
  }, [])

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  function createMarkup(text) { return {__html: text}; };

  return (
    <div>
      {news.map((article, index) => {
        return (
          <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>
                {article.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div dangerouslySetInnerHTML={createMarkup(article.article_content)}></div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
      
    </div>
  )
}

export default News