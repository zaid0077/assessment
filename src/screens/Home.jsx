import { useEffect, useState } from 'react';
import Header from '../components/Header';
import List from '../components/ListItems';
import data from '../mock/data.json';
import MenuItem from '@mui/material/MenuItem';
import ReactPaginate from 'react-paginate';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../styles/app.css';


export default function Home() {
  const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    let categories = []
    posts.posts.forEach(p => {
      p.categories.forEach(pc => {
        categories.push({
          value: pc.id,
          label: pc.name
        })
      })
    })
    setOptions(categories)
    setLoading(true)
  }, [currentPosts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  // const _onSelect = (test) => {
  //   currentPosts = posts.posts.filter(product => product.categories.some(cat => cat.id === test.value));
  //   return currentPosts
  // }

  const renderDropdown = () => {
    if (loading) {
      return <Dropdown options={options} onChange={_onSelect}  placeholder="Select an option" />
    }
  }

  return (
    <div>
      <Header />
  
      {renderDropdown()}

      <List data={currentPosts} />
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      ></ReactPaginate>
    </div>
  );
}
