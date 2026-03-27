package com.hritik.internshipfinder.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.hritik.internshipfinder.model.Application;
import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByUserId(Long userId);
}