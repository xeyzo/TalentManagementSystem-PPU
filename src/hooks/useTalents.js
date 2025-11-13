import { useState, useEffect, useMemo } from 'react';
import talentData from '../dummy/Talent.json';

const ITEMS_PER_PAGE = 10;

export const useTalents = () => {
  const [talents] = useState(talentData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const filteredTalents = useMemo(() => {
    if (!debouncedQuery) {
      return talents;
    }
    return talents.filter(talent =>
      talent.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      talent.skills.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [talents, debouncedQuery]);

  const paginatedTalents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredTalents.slice(startIndex, endIndex);
  }, [filteredTalents, currentPage]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const totalPages = Math.ceil(filteredTalents.length / ITEMS_PER_PAGE);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return {
    isModalOpen,
    handleCloseModal, 
    handleOpenModal,
    paginatedTalents, 
    currentPage, 
    totalPages, 
    goToPage,
    totalTalents: filteredTalents.length,
    itemsPerPage: ITEMS_PER_PAGE,
    searchQuery,
    handleSearch,
  };
};
