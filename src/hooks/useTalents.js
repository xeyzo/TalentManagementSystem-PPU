import { useState, useEffect, useMemo } from 'react';
import talentData from '../dummy/Talent.json';

const ITEMS_PER_PAGE = 10;

export const useTalents = () => {
  const [talents] = useState(talentData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paginatedTalents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return talents.slice(startIndex, endIndex);
  }, [talents, currentPage]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const totalPages = Math.ceil(talents.length / ITEMS_PER_PAGE);

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
    totalTalents: talents.length,
    itemsPerPage: ITEMS_PER_PAGE
  };
};
