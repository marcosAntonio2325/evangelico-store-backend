
package com.evangelico.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evangelico.store.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
