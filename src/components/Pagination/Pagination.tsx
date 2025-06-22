import React from 'react';
import {
    PaginationContainer,
    PaginationButton,
    PageInfo,
    PageEllipsis
} from "./styles";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
                                                          currentPage,
                                                          totalPages,
                                                          onPageChange,
                                                          className,
                                                      }) => {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        pages.push(1);

        if (totalPages <= maxVisiblePages + 2) {
            for (let i = 2; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const leftOffset = Math.floor(maxVisiblePages / 2);
            const rightOffset = Math.ceil(maxVisiblePages / 2);

            let startPage = currentPage - leftOffset;
            let endPage = currentPage + rightOffset;

            if (startPage < 2) {
                startPage = 2;
                endPage = maxVisiblePages + 1;
            }

            if (endPage > totalPages - 1) {
                endPage = totalPages - 1;
                startPage = totalPages - maxVisiblePages;
            }

            if (startPage > 2) {
                pages.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages - 1) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <PaginationContainer className={className}>
            <PaginationButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Página anterior"
            >
                &lt;
            </PaginationButton>

            {getPageNumbers().map((page, index) => {
                if (page === '...') {
                    return <PageEllipsis key={`ellipsis-${index}`}>...</PageEllipsis>;
                }

                return (
                    <PaginationButton
                        key={page}
                        $active={page === currentPage}
                        onClick={() => onPageChange(Number(page))}
                        aria-label={`Ir para página ${page}`}
                        aria-current={page === currentPage ? 'page' : undefined}
                    >
                        {page}
                    </PaginationButton>
                );
            })}

            <PaginationButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Próxima página"
            >
                &gt;
            </PaginationButton>

            <PageInfo>
                Página {currentPage} de {totalPages}
            </PageInfo>
        </PaginationContainer>
    );
};